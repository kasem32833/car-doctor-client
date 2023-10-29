import person from '../../../../public/images/about_us/person.jpg'
import parts from '../../../../public/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <img
          src={person}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-xl font-bold text-red-500">About Us</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
