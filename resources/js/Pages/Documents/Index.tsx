import { Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import FilterBar from '@/Components/FilterBar/FilterBar';
import Pagination from '@/Components/Pagination/Pagination';
import { Document, PaginatedData } from '@/types';
import Table from '@/Components/Table/Table';
import { Trash2 } from 'lucide-react';

function Index() {
  const { documents } = usePage<{
    documents: PaginatedData<Document>;
  }>().props;

  const {
    data,
    meta: { links }
  } = documents;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Documents</h1>
      <div className="flex items-center justify-between mb-6">
        <FilterBar />
        <Link
          className="btn-indigo focus:outline-none"
          href={route('documents.create')}
        >
          <span>Upload</span>
          <span className="hidden md:inline"> Document</span>
        </Link>
      </div>
      <Table
        columns={[
          {
            label:"Uploaded At",
            name:"created_at",
            renderCell: row => new Date(row.created_at).toLocaleDateString()+" "+ new Date(row.created_at).toLocaleTimeString()
          },
          {
            label: 'Document Name',
            name: 'document_name',
            renderCell: row => (
              <>
                {row.document_name}
                {row.deleted_at && (
                  <Trash2 size={16} className="ml-2 text-gray-400" />
                )}
              </>
            )
          },
          { label: 'Path', name: 'document_unique_name' }
        ]}
        rows={data}
        getRowDetailsUrl={row => route('documents.edit', row.id)}
      />
      <Pagination links={links} />
    </div>
  );
}

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Index.layout = (page: React.ReactNode) => (
  <MainLayout title="Documents" children={page} />
);

export default Index;
