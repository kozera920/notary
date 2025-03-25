import React from 'react';
import { Head } from '@inertiajs/react';
import { Link, usePage, useForm, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import DeleteButton from '@/Components/Button/DeleteButton';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import SelectInput from '@/Components/Form/SelectInput';
import TrashedMessage from '@/Components/Messages/TrashedMessage';
import { Update, Document } from '@/types';
import FieldGroup from '@/Components/Form/FieldGroup'; 
import { stat } from 'fs';

const Edit = () => {
  const { update, documents } = usePage<{
    update: Update;
    documents: Document[];
  }>().props;

  const { data, setData, errors, put, processing } = useForm({
    status: update.status || '',
    message: update.message || '',
    document_id: update.document_id || ''
  });
  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'notarized', label: 'Notatized' },
    { value: 'decline', label: 'Declined' },
  ];
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    put(route('updates.update', update.id));
  }

  function destroy() {
    if (confirm('Are you sure you want to delete this update?')) {
      router.delete(route('updates.destroy', update.id));
    }
  }

  function restore() {
    if (confirm('Are you sure you want to restore this update?')) {
      router.put(route('updates.restore', update.id));
    }
  }

  const { auth } = usePage<{ auth: { user: any } }>().props;
    const userInfo = auth.user;
    //Check if the user is an owner
    if(!userInfo.owner){
      //redirect to dashboard
      router.get(route('dashboard'));
      return;
    }

  return (
    <div>
      <Head title={`${data.status}`} />
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          href={route('updates')}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Updates
        </Link>
        <span className="mx-2 font-medium text-indigo-600">/</span>
        {data.status}
      </h1>
      {update.deleted_at && (
        <TrashedMessage
          message="This update has been deleted."
          onRestore={restore}
        />
      )}
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 p-8 lg:grid-cols-2">
          <FieldGroup
              label="Document"
              name="document_id"
              error={errors.document_id}
            >
              <SelectInput
                name="document_id"
                error={errors.document_id}
                value={data.document_id}
                onChange={e => setData('document_id', e.target.value)}
                options={[
                  {
                    value: '',
                    label: ''
                  },
                  ...documents.map(org => ({
                    value: String(org.id),
                    label: org.document_name
                  }))
                ]}
              />
            </FieldGroup>

            <FieldGroup
              label="Status"
              name="status"
              error={errors.status}
            >
              <SelectInput
                name="status"
                error={errors.status}
                value={data.status}
                onChange={e => setData('status', e.target.value)}
                options={[
                  {
                    value: '',
                    label: ''
                  },
                  ...statusOptions
                ]}
              />
            </FieldGroup>
            

            


            <FieldGroup
              label="Message"
              name="message"
              error={errors.message}
            >
              <TextInput
                name="postal_code"
                error={errors.message}
                value={data.message}
                onChange={e => setData('message', e.target.value)}
              />
            </FieldGroup>
          </div>
          <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
            {!update.deleted_at && (
              <DeleteButton onDelete={destroy}>Delete Update</DeleteButton>
            )}
            <LoadingButton
              loading={processing}
              type="submit"
              className="ml-auto btn-indigo"
            >
              Update Update
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Edit.layout = (page: React.ReactNode) => <MainLayout children={page} />;

export default Edit;
