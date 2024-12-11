

const Contact = () => {
  return (
    <section className="contact mx-4 md:mx-16" style={{position:'fixed', top:'100px', right:'0px', left:'0px'}} data-page="contact">

      

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5120.036155704754!2d8.23986560000001!3d50.085948399999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdbdd83c46fa0b%3A0x49576d73daec0e28!2sSteingasse%202%2C%2065183%20Wiesbaden!5e0!3m2!1sen!2sde!4v1733766072825!5m2!1sen!2sde"
            
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 text-sm form-title">Contact No: +49 163 149 7303</h3>
        <h3 className="h3 text-sm form-title">Contact Form</h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="rounded w-[250px] h-[25px]" placeholder="Full name" required data-form-input />

            <input type="email" name="email" className="rounded w-[250px] h-[25px]" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="rounded w-[500px] h-[110px]" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
