export default function ProductPage({ products }) {
  return (
    <>
      <section>
        <div>
          {products.map((el) => {
            return (
              <div key={el.id}>
                <h2>{el.title}</h2>
                <figure>
                  <img src={el.image} alt={el.description} />
                </figure>
                <p>{el.price + " $"}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
