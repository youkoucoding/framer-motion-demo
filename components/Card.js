import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2, rotate: -30 }}
      className='mt-24 relative max-w-lg mx-auto'>
      <div
        className="absolute z-10 inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg transform -skew-y-0 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"
      ></div>
      <div className="relative z-20 rouded-md shadow-md bg-white p-8 rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80"
          alt="#"
          className="h-80 w-full object-cover"
        />
        <div className="p-8">
          <h4 className="font-bold text-2xl">Work Title</h4>
          <p className="leading-normal pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            eaque quaerat. Hic quasi dicta quo! Incidunt molestias
            repudiandae voluptatum beatae alias? Dolores perspiciatis
            eligendi voluptatibus pariatur corporis tempore fuga voluptas.
              </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg px-6 py-2 rounded-md text-white text-sm mt-4 font-bold"
          >View More</a
          >
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
