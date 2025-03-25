import React, { useState, useEffect } from 'react';

const ArizonaIDVerification = ({ firstName, lastName, setIsIDVerified }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);

      // Reset results and errors
      setResults(null);
      setError(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select an image of an Arizona ID");
      return;
    }

    setLoading(true);

    try {
      const base64Image = await fileToBase64(file);

      // OCR.space API for text extraction
      const formData = new FormData();
      formData.append('base64Image', base64Image);
      formData.append('language', 'eng');
      formData.append('ocrengine', '2'); // More accurate OCR engine
      formData.append('scale', 'true');
      formData.append('isOverlayRequired', 'false');

      const response = await fetch('https://api.ocr.space/parse/image', {
        method: 'POST',
        headers: {
          apikey: 'K81876378388957', // Replace with your API key from OCR.space
        },
        body: formData,
      });

      const data = await response.json();

      if (data.IsErroredOnProcessing) {
        throw new Error(data.ErrorMessage || "Failed to process the image");
      }

      // Parse the extracted text
      const parsedText = data.ParsedResults[0]?.ParsedText || '';

      // Check if the text contains Arizona ID markers
      const isArizonaID = checkIfArizonaID(parsedText);

      // Extract relevant information
      const extractedInfo = extractRelevantInfo(parsedText);

      // Check if the extracted name matches the provided firstName and lastName
      const isNameMatch =
        extractedInfo.name &&
        extractedInfo.name.toLowerCase() === `${firstName} ${lastName}`.toLowerCase();

      // Check if expiration date is found and not expired
      const expirationDate = extractedInfo.expirationDate;
      const isExpirationDateFound = !!expirationDate;
      const isExpired = isExpirationDateFound && new Date(expirationDate) < new Date();

      // Check if ID type is supported
      const idType = determineIDType(parsedText);
      const isSupportedType = ["Driver's License", "State ID Card", "Passport"].includes(idType);

      // Set verification results
      const verificationResults = {
        isValid: isArizonaID,
        confidence: isArizonaID ? 'High' : 'Low',
        idType,
        extractedInfo,
        isNameMatch,
        isExpirationDateFound,
        isExpired,
        rawText: parsedText,
      };
      setResults(verificationResults);

      // Set setIsIDVerified based on all conditions
      setIsIDVerified(
        isArizonaID &&
          isNameMatch &&
          isSupportedType &&
          isExpirationDateFound &&
          !isExpired
      );
    } catch (err) {
      setError(err.message || "An error occurred during verification");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Helper function to check if text contains Arizona ID markers
  const checkIfArizonaID = (text) => {
    const azMarkers = [
      'ARIZONA',
      'AZ',
      'MOTOR VEHICLE DIVISION',
      'DRIVER LICENSE',
      'IDENTIFICATION CARD',
      'CLASS',
    ];

    // Check if at least 2 markers are present
    return azMarkers.filter((marker) => text.toUpperCase().includes(marker)).length >= 2;
  };

  // Helper function to determine ID type
  const determineIDType = (text) => {
    const upperText = text.toUpperCase();

    if (upperText.includes("DRIVER LICENSE") || upperText.includes("DRIVER'S LICENSE")) {
      return "Driver's License";
    } else if (upperText.includes("IDENTIFICATION CARD") || upperText.includes("ID CARD")) {
      return 'State ID Card';
    } else if (upperText.includes('PASSPORT')) {
      return 'Passport';
    }

    return 'Unknown';
  };

  // Helper function to extract relevant information
  const extractRelevantInfo = (text) => {
    const info = {};

    // Extract Date of Birth
    const dobMatch = text.match(/DOB:?\s*(\d{2}\/\d{2}\/\d{4})/i) ||
      text.match(/BIRTH\s*DATE:?\s*(\d{2}\/\d{2}\/\d{4})/i);
    if (dobMatch) info.dateOfBirth = dobMatch[1];

    // Extract Expiration Date
    const expMatch = text.match(/EXP:?\s*(\d{2}\/\d{2}\/\d{4})/i) ||
      text.match(/EXPIRATION:?\s*(\d{2}\/\d{2}\/\d{4})/i);
    if (expMatch) info.expirationDate = expMatch[1];

    // Extract ID Number
    const idMatch = text.match(/([A-Z]\d{8})/);
    if (idMatch) info.idNumber = idMatch[1];

    // Extract Name
    // Look for the pattern "1 FIRSTNAME" and "2 LASTNAME"
    const firstNameMatch = text.match(/1\s+([A-Z]+)/i);
    const lastNameMatch = text.match(/2\s+([A-Z]+)/i);

    if (firstNameMatch && lastNameMatch) {
      info.name = `${firstNameMatch[1]} ${lastNameMatch[1]}`;
    } else {
      // Fallback to the original regex if the specific pattern is not found
      const fallbackNameMatch = text.match(/\b([A-Z][a-z]+)\s([A-Z][a-z]+)\b/);
      if (fallbackNameMatch) info.name = fallbackNameMatch[0];
    }

    return info;
  };

  return (
    <div className="max-w-xl p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Arizona ID Verification</h1> */}

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Upload Arizona ID Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm border border-gray-300 rounded p-2"
          />
          <p className="mt-1 text-xs text-gray-500">
            Supported types: Driver's License, State ID, Passport
          </p>
        </div>

        {preview && (
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Preview:</p>
            <img
              src={preview}
              alt="ID Preview"
              className="max-h-60 object-contain border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !file}
          className={`px-4 py-2 rounded font-medium ${
            loading || !file
              ? 'bg-gray-300 text-gray-500'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {loading ? 'Verifying...' : 'Verify ID'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {results && (
        <div
          className={`border rounded p-4 mb-4 ${
            results.isValid ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
          }`}
        >
          <h2 className="text-lg font-semibold mb-2">Verification Results</h2>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="text-sm font-medium">Status:</div>
            <div className={results.isValid ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
              {results.isValid ? 'Verified ✓' : 'Not Verified ✗'}
            </div>

            <div className="text-sm font-medium">ID Type:</div>
            <div>{results.idType || 'Unknown'}</div>

            <div className="text-sm font-medium">Confidence:</div>
            <div>{results.confidence}</div>

            <div className="text-sm font-medium">Name Match:</div>
            <div className={results.isNameMatch ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
              {results.isNameMatch ? 'Match ✓' : 'No Match ✗'}
            </div>

            <div className="text-sm font-medium">Expiration Date:</div>
            <div className={results.isExpired || !results.isExpirationDateFound ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}>
              {results.isExpirationDateFound
                ? results.isExpired
                  ? 'Expired ✗'
                  : 'Valid ✓'
                : 'Not Found ✗'}
            </div>
          </div>

          {Object.keys(results.extractedInfo).length > 0 && (
            <>
              <h3 className="text-md font-medium mb-1">Extracted Information:</h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {results.extractedInfo.name && (
                  <>
                    <div className="text-sm font-medium">Name:</div>
                    <div>{results.extractedInfo.name}</div>
                  </>
                )}

                {results.extractedInfo.idNumber && (
                  <>
                    <div className="text-sm font-medium">ID Number:</div>
                    <div>{results.extractedInfo.idNumber}</div>
                  </>
                )}

                {results.extractedInfo.dateOfBirth && (
                  <>
                    <div className="text-sm font-medium">Date of Birth:</div>
                    <div>{results.extractedInfo.dateOfBirth}</div>
                  </>
                )}

                {results.extractedInfo.expirationDate && (
                  <>
                    <div className="text-sm font-medium">Expiration Date:</div>
                    <div>{results.extractedInfo.expirationDate}</div>
                  </>
                )}
              </div>
            </>
          )}

          <details className="mt-2">
            <summary className="text-sm text-gray-600 cursor-pointer">Show Raw Text</summary>
            <pre className="mt-2 p-2 bg-gray-100 text-xs rounded overflow-x-auto">
              {results.rawText || 'No text extracted'}
            </pre>
          </details>
        </div>
      )}

      <div className="text-xs text-gray-500 mt-6">
        <p>Before you submit your document you must verify government-issued ID, make sure:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Uploaded image is clearly readable</li>
          <li>The names on that ID match the names you use on <b>TG Notary Now</b></li>
          <li>Expire date must still be valid</li>
          <li>ID type must be one of supported types(Driver's License, State ID, Passport)</li>
        </ul>
      </div>
    </div>
  );
};

export default ArizonaIDVerification;