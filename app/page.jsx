const products = [
  ['Croissants', 'Flaky, fresh-baked pastries for breakfast boxes, coffee runs and weekend treats.'],
  ['Cakes & Slices', 'Celebration cakes, slices and layered sweets shown across public posts.'],
  ['Donuts & Eclairs', 'Sweet counter favourites that make ordering simple for families and offices.'],
  ['Breads', 'Fresh breads and savoury bakery items for everyday delivery.'],
  ['Tea Cakes', 'Tea-time bakes built for gifting, guests and quick cravings.'],
  ['Custom Orders', 'A clearer order page can route requests straight to WhatsApp.' ],
]

const features = [
  {
    title: 'Fresh daily delivery',
    text: 'Public posts highlight fresh bakes and free delivery in DHA-2, with orders handled through phone/WhatsApp.',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cakes and more',
    text: 'A website gives cakes, pastries, caramel pastry and seasonal items one clean place to live beyond Instagram posts.',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Menu, reviews, products',
    text: 'The Instagram highlights already exist; a site turns them into quick sections for new customers.',
    img: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Central Park DHA-2 Islamabad</p>
          <h1>CHOUX</h1>
          <p className="lead">Fresh bakes, cakes, croissants, donuts, breads and tea cakes presented in a simple order-focused bakery site.</p>
          <div className="actions">
            <a className="primary" href="https://wa.me/923195703398">Order on WhatsApp</a>
            <a className="secondary" href="https://www.instagram.com/choux_cakery/">View Instagram</a>
          </div>
          <div className="stats">
            <span><strong>555</strong>posts</span>
            <span><strong>3,279</strong>followers</span>
            <span><strong>4</strong>menu highlights</span>
          </div>
        </div>
        <div className="heroPhoto">
          <img src="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1400&q=80" alt="Fresh bakery counter" />
        </div>
      </section>

      <section className="strip">
        <p className="eyebrow">Why a site helps</p>
        <h2>Move customers from cravings to orders faster</h2>
        <p>Instead of asking customers to scan posts, a small site can group products, show the delivery area and make the WhatsApp order action obvious.</p>
      </section>

      <section className="products">
        <p className="eyebrow">Bakery menu</p>
        <h2>Fresh categories at a glance</h2>
        <div className="grid">
          {products.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="features">
        {features.map((feature) => (
          <article key={feature.title} className="feature">
            <img src={feature.img} alt={`${feature.title} bakery visual`} />
            <div>
              <p className="eyebrow">Featured</p>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="visit">
        <div>
          <p className="eyebrow">Visit and order</p>
          <h2>Central Park DHA-2, Islamabad</h2>
          <p>Public Instagram posts list orders and delivery at +92 319 5703398. This demo avoids unconfirmed prices, hours and guarantees.</p>
        </div>
        <div className="orderBox">
          <h3>Order route</h3>
          <a href="https://wa.me/923195703398">+92 319 5703398</a>
          <a href="https://www.instagram.com/choux_cakery/">@choux_cakery</a>
          <p>Best next step: confirm menu, prices, hours and delivery radius with CHOUX.</p>
        </div>
      </section>
    </main>
  )
}
