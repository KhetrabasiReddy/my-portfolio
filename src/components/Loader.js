
import './../styles/loaderSpinner.css'
import loadingImg from './../assets/images/man-running.mp4'
function Loader() {
    return (
        <div className="loader d-flex justify-content-center align-items-center bg-light">
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
