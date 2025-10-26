export default async function ProductView({
  params,
}: {
  params: Promise<{ productId: string; reviewid: string }>;
}) {
  const { productId, reviewid } = await params;
  return (
    <h1>
      Product {productId} Review {reviewid}
    </h1>
  );
}
