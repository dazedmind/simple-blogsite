import React from 'react'

function Content() {
    return(
        <div className='bg-neutral-900 mx-10 sm:mx-20 lg:mx-40 xl:mx-80 mb-10 p-5 rounded h-auto '>
            <section className='mb-8'>
                <h2 className='text-xl xl:text-3xl text-cyan-600 font-bold mb-4'>What is Web Application?</h2>
                <p className='text-lg text-white ml-2'> A web application (web app) is an application program that is stored on a remote server and delivered over the internet through a browser interface. Web services are web apps by definition and many, although not all, websites contain web apps. <br />

                Developers design web applications for a wide variety of uses and users, from an organization to an individual for numerous reasons. Commonly used web applications can include webmail, online calculators or e-commerce shops. While users can only access some web apps by a specific browser, most are available no matter the browser.</p>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl text-cyan-600 font-bold mb-4'>How Web Applications Work</h2>
                <p className='text-lg text-white ml-2'>
                Web applications do not need to be downloaded since they are accessed through a network. Users can access a web application through a web browser, such as Google Chrome, Mozilla Firefox or Safari. <br />

                <br />
                For a web app to operate, it needs a web server, application server and database. Web servers manage the requests that come from a client, while the application server completes the requested task. A database stores any necessary information. <br />

                <br />
                Web applications typically have short development cycles and small development teams. Developers write most web apps in JavaScript, HTML5 or CSS. Client-side programming typically utilizes these languages, which help build an application's front-end. Server-side programming creates the scripts a web app will use. Languages such as Python, Java and Ruby are commonly used in server-side programming.
                </p>
            </section>
            
            <section className='mb-8'>
                <h2 className='text-3xl text-cyan-600 font-bold mb-4'>Benefits</h2>
                <p className='text-lg text-white ml-2'>
                Web applications have many benefits. Some common benefits include the following:

                <ul className='list-disc'>
                    <li className='ml-10'>
                        Multiple users can access the same version of an application.
                    </li>
                    <li className='ml-10'>
                        Users don't need to install the app.
                    </li>
                    <li className='ml-10'>
                        Users can access the app through various platforms such as a desktop, laptop or mobile.
                    </li>
                    <li className='ml-10'>
                        Users can access the app through multiple browsers.
                    </li>
                </ul>
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl text-cyan-600 font-bold mb-4'>Web app vs. native app vs. hybrid app</h2>
                <p className='text-lg text-white ml-2'>
                Within the mobile computing sector, web apps are sometimes contrasted with native apps, which are applications developers build specifically for a particular platform or device and install on that device. Native apps can commonly make use of device-specific hardware, such as a GPS or camera on a mobile native app. <br />

                <br />
                Programs that combine the two approaches are sometimes referred to as hybrid applications. Hybrid apps work similar to web apps but install to the device as a native app would. Hybrid apps can also take advantage of device-specific resources by using internal APIs. Downloaded native apps can sometimes operate offline; however, hybrid apps don't have this functionality. A hybrid app will typically share similar navigation elements to a web app since they are primarily based on web apps.
                </p>
            </section>
        </div>
    );
}

export default Content;