import { BallTriangle } from 'react-loader-spinner'
import './../styles/loaderSpinner.css'
function Loader() {
    return (
        <div className="loader d-flex justify-content-center align-items-center bg-light">
            {/* <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /> */}
            <div className='circle-container'>
                <div class="circle circle-5">
                    <div class="circle circle-4">
                        <div class="circle circle-3">
                            <div class="circle circle-2">
                                <div class="circle circle-1">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
