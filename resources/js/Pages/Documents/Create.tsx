import { Link, useForm, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import LoadingButton from '@/Components/Button/LoadingButton';
import FileInput from '@/Components/Form/FileInput';
import FieldGroup from '@/Components/Form/FieldGroup';
import { useState, useEffect } from 'react';
import ArizonaIDVerification from './ID-verifier/App';

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    document_name: '',
    document_unique_name: '',
    _method: 'put'
  });

  const [isIDVerified, setIsIDVerified] = useState(false); // Remember to set it to fale by default

  useEffect(() => {
    if (data.document_unique_name && typeof data.document_unique_name === 'object' && 'name' in data.document_unique_name) {
      setData('document_name', data.document_unique_name.name);
    }
  }, [data.document_unique_name]);
  // For debugging
  const [selectedFileName, setSelectedFileName] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //check if file is empty before submitting
    if (!data.document_unique_name || data.document_unique_name === '') {
      return;
    }
    post(route('documents.store'));
  }
  const { auth } = usePage<{ auth: { user: any } }>().props;
  const userInfo = auth.user;

  console.log(isIDVerified)
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          href={route('documents')}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Documents
        </Link>
        <span className="font-medium text-indigo-600"> /</span> Create
      </h1>
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">

        <div className="grid gap-8 p-8">
          <ArizonaIDVerification
            firstName={userInfo.first_name}
            lastName={userInfo.last_name} 
            setIsIDVerified={setIsIDVerified}

          />
        </div>
        <form onSubmit={handleSubmit}>

          <div className="grid gap-8 p-8">
            <FieldGroup
              label="Document File you want to notarize(images, .pdf, .doc, .docx)"
              name="document_name" error={errors.document_unique_name}>
              <FileInput
                name="document_unique_name"
                accept="image/*,.pdf,.doc,.docx"
                required
                error={errors.document_unique_name}
                value={data.document_unique_name}
                onChange={(e) => {
                  // Check if e is an event object with target.files
                  if (e && e.target && e.target.files && e.target.files.length > 0) {
                    const file = e.target.files[0];
                    setSelectedFileName(file.name); // For debugging
                    setData('document_name', file.name);
                    setData('document_unique_name', file);
                  }
                  // If e is directly a File object
                  else if (e && e.name) {
                    setSelectedFileName(e.name); // For debugging
                    setData('document_name', e.name);
                    setData('document_unique_name', e);
                  }
                }}
              />
            </FieldGroup>
           
          </div>


          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              className={`btn-indigo ${(!data.document_unique_name || data.document_unique_name === '')||isIDVerified==false ? 'cursor-not-allowed disabled:opacity-60' : ''}`}
              disabled={(!data.document_unique_name || data.document_unique_name === '') || isIDVerified == false}
            >
              Upload Document
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.layout = (page: React.ReactNode) => (
  <MainLayout title="Create Document" children={page} />
);

export default Create;