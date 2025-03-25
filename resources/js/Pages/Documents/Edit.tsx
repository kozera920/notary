import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Link, usePage, useForm, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import DeleteButton from '@/Components/Button/DeleteButton';
import LoadingButton from '@/Components/Button/LoadingButton';
import TrashedMessage from '@/Components/Messages/TrashedMessage';
import { Document } from '@/types';
import Table from '@/Components/Table/Table';
import FieldGroup from '@/Components/Form/FieldGroup';
import FileInput from '@/Components/Form/FileInput';
import { Col, Row } from 'react-bootstrap';
import VideoCall from './video-call/App';
import { DownloadIcon, Trash2Icon, UploadIcon } from 'lucide-react';

const Edit = () => {
  const { document } = usePage<{
    document: Document & { document_unique_name: File | null; }
  }>().props;

  // Initialize form with document data
  const { data, setData, errors, post, processing } = useForm({
    document_name: document.document_name || '',
    document_unique_name: '',
    _method: 'put'
  });

  useEffect(() => {
    if (data.document_unique_name && typeof data.document_unique_name === 'object' && 'name' in data.document_unique_name) {
      setData('document_name', data.document_unique_name.name);
    }
  }, [data.document_unique_name]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Check if file is empty before submitting
    if (!data.document_unique_name || data.document_unique_name === '') {
      return;
    }

    // Use post with _method: 'put' instead of put() directly
    post(route('documents.update', document.id));
  }

  function destroy() {
    if (confirm('Are you sure you want to delete this document?')) {
      router.delete(route('documents.destroy', document.id));
    }
  }

  function restore() {
    if (confirm('Are you sure you want to restore this document?')) {
      router.put(route('documents.restore', document.id));
    }
  }

  //displaying the document or image
  const documentFile = document.document_unique_name;
  const documentExt = documentFile.split('.').pop() || '';
  const whatDocumentType = (documentExt: string) => {
    if (documentExt === 'pdf') {
      return 'pdf';
    } else if (documentExt === 'doc' || documentExt === 'docx') {
      return 'word';
    } else {
      return 'image';
    }
  }
  const documentType = whatDocumentType(documentExt);

  const { auth } = usePage<{ auth: { user: any } }>().props;
  const userInfo = auth.user;

  return (
    <>
      <Row>
        <Col md={4}>
          <div>
            <Head title={document.document_name} />
            <h1 className="mb-8 text-3xl font-bold">
              <Link
                href={route('documents')}
                className="text-indigo-600 hover:text-indigo-700"
              >
                Documents
              </Link>
              <span className="mx-2 font-medium text-indigo-600">/</span>
              {document.document_name}
            </h1>
            {document.deleted_at && (
              <TrashedMessage
                message="This document has been deleted. It will be permanently removed after 30 days."
                onRestore={restore}
              />
            )}

            {!document.deleted_at && (
              <>
                <div className="video-call-box py-4">
                  <VideoCall />
                </div>
                <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-8 p-8">
                      <FieldGroup label="Document File(images, .pdf, .doc, .docx)" name="document_unique_name" error={errors.document_unique_name}>
                        <FileInput
                          name="document_unique_name"
                          accept="image/*,.pdf,.doc,.docx"
                          required
                          error={errors.document_unique_name}
                          value={data.document_unique_name}
                          className='w-full'
                          onChange={e => {
                            // Check if e is an event object with target.files
                            if (e && e.target && e.target.files && e.target.files.length > 0) {
                              const file = e.target.files[0];
                              setData('document_name', file.name);
                              setData('document_unique_name', file);
                            }
                            // If e is directly a File object
                            else if (e && e.name) {
                              setData('document_name', e.name);
                              setData('document_unique_name', e);
                            }
                          }}
                        />
                      </FieldGroup>
                    </div>
                    <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
                      {!document.deleted_at && (
                        <DeleteButton onDelete={destroy} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                          <Trash2Icon/>
                        </DeleteButton>
                      )}

                      {userInfo.owner && (
                        <LoadingButton
                          loading={processing}
                          type="submit"
                          title='Upload notirized document'
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          disabled={!data.document_unique_name || data.document_unique_name === ''}
                        >
                          <UploadIcon/>
                        </LoadingButton>
                      )}

                      {
                        document.updated_at && (
                          <a
                            href={document.document_unique_name}
                            download
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            title='Download'
                          >
                            <DownloadIcon/>
                          </a>
                        )
                      }
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </Col>
        {!document.deleted_at && (
          <>
            <Col md={8}>
              <div className="bg-white rounded shadow">
                <div className="p-8">
                  {documentType === 'pdf' && (
                    <embed
                      src={document.document_unique_name}
                      className="w-full"
                      type="application/pdf"
                      style={{ height: '600px' }}
                    />
                  )}
                  {documentType === 'word' && (
                    <iframe
                      src={`https://view.officeapps.live.com/op/embed.aspx?src=${document.document_unique_name}`}
                      width="100%"
                      height="600"
                    ></iframe>
                  )}
                  {documentType === 'image' && (
                    <img
                      src={document.document_unique_name}
                      alt={document.document_name}
                      className="w-full rounded"
                    />
                  )}
                </div>
              </div>

                <div className="updates-box">
                <h2 className="mt-12 mb-6 text-2xl font-bold">Updates</h2>
                <Table
                  columns={[
                  {
                    label: 'Date',
                    name: 'created_at',
                    renderCell: (row) => {
                    const timeDifference = (date: string) => {
                      const now = new Date();
                      const createdAt = new Date(date);
                      const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

                      if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
                      const diffInMinutes = Math.floor(diffInSeconds / 60);
                      if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
                      const diffInHours = Math.floor(diffInMinutes / 60);
                      if (diffInHours < 24) return `${diffInHours} hours ago`;
                      const diffInDays = Math.floor(diffInHours / 24);
                      return `${diffInDays} days ago`;
                    };

                    return timeDifference(row.created_at)+"("+new Date(row.created_at).toLocaleTimeString()+"  "+new Date(row.created_at).toLocaleDateString()+")";
                    }
                  },
                  { label: 'Status', name: 'status' },
                  { label: 'Message', name: 'message' },
                  ]}
                  rows={document.updates}
                />
                </div>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

Edit.layout = (page: React.ReactNode) => <MainLayout children={page} />;

export default Edit;