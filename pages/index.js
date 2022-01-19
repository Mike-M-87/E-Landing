import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Eddsy</title>
        <link rel='icon' href='#' />
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <section className='top container-fluid'>

        <nav className='navbar sticky-top navbar-light bg-transparent'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>Eddsy Jones</a>

            <div className='d-flex mt-3'>
              <p className='me-3'>HOME</p>
              <a className='me-3' href='#'>
                <Image
                  src="https://img.icons8.com/material/24/000000/facebook-f.png"
                  width={20}
                  height={20}
                  alt='Facebook'
                /></a>
              <a className='me-3' href='#'>
                <Image
                  src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
                  width={20}
                  height={20}
                  alt='Twitter'
                /></a>
              <a href='#'>
                <Image
                  src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
                  width={20}
                  height={20}
                  alt='Instagram'
                /></a>
            </div>
          </div>
        </nav>

        <div className='toptext'>
          <h1>Online Learning<br /> Webinar</h1>
          <hr className='h-line'></hr>
          <p>Unlock Great Potential Througn E-learning.</p>
          <button className='btn reserve'>Reserve</button>
        </div>
        
      </section>


      <section className='d-flex mt-5 align-items-center justify-content-around flex-wrap'>
        <div className='order-1 p-3'>
          <h1 className='text-primary'>Hi, I'm Jack,<br />Want to boost your grades?</h1>
          <p className='lead text-secondary text-start'>Learn by understanding your schedule.<br />
            Gain skills and knowledge to build a great future.<br /></p>
          <p className='blockquote-footer mt-1'>Founder and Creator <b>Martin Martin</b></p>
        </div>
        <div className='order-md-2 me-5 me-md-0'>
          <Image src={"/default3.png"} width={500} height={300} alt='Jack' />
        </div>
      </section>

      <section className='lessons d-flex align-items-center justify-content-center'>
        <div>
          <h1 className='col-lg-9'>Choosing your Lessons</h1>
          <p className='col-lg-4'>With our new student pricing on Code, eligible college
            students can get complete access to interactive
            curriculum for more than 35% off the regular price
          </p>
          <button className='btn btn-light my-4 p-2'>Learn more</button>
        </div>
        <div>
          <Image src={"/elearn2.png"} width={250} height={400} alt='bulb' />
        </div>
      </section>

      <section className='mt-5'>
        <h1 className='text-center'> /* Incomplete Sections From here */</h1>
      </section>


      <footer className='footer mt-5 p-3'>
        <h2>Our Team :</h2>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around flex-row">
            <div className="d-flex flex-column">
              <h6>Bravaa</h6>
              <a>link</a>
              <a>link</a>
              <a>link</a>
            </div>
            <div className="d-flex flex-column">
              <h6>Bravaa</h6>
              <a>link</a>
              <a>link</a>
              <a>link</a>
              <a>link</a>


            </div>
            <form className="mt-3">
              <h6>Subscribe to our email newsletter:</h6>
              <div className="mb-3 mt-3">
                <label for="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

      </footer>

    </>
  )
}

