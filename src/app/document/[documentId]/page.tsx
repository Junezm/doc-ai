
interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>document id page { documentId }</h1>
    </div>
  );

}

export default DocumentIdPage;
// Compare this snippet from page.tsx: