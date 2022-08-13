import React from 'react';

const Landing = () => {
    return (
        <>
            <div class="hero  h-screen lg:h-[60vh]  bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div>
                        <p data-aos="fade-up"
                            data-aos-delay='200'
                            data-aos-duration='900'
                            className='text-xl'>Best Quality</p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay='600'
                            data-aos-duration='900'
                            class="text-5xl font-bold ">Professional Cleaning Service!</h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay='1000'
                            data-aos-duration='1000'
                            class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button
                            data-aos="fade-up"
                            data-aos-delay='1400'
                            data-aos-duration='1000'
                            class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0 '>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-18ee/k2-_8459f78f-27d9-4128-be0b-eb5725052f89.v1.jpg?odnWidth=912&odnHeight=500&odnBg=ffffff" class="h-full w-96 rounded-lg" alt='' />
                    </div>
                </div>
            </div>
            <div

                className='shadow-lg rounded-2xl mt-[-40px]  bg-base-200  mx-auto  relative  z-20 p-10 w-5/6'>
                <h1 className='text-2xl mb-5 text-primary font-bold'>Get Free Estimate</h1>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                </div>
                <button className='btn btn-primary mt-5'>Get a Query</button>
            </div>
        </>
    );
};

export default Landing;