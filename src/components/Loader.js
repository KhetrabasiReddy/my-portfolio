
import './../styles/loaderSpinner.css'

function Loader() {
    return (
        <div className="loader d-flex justify-content-center align-items-center bg-light">
            <div className='circle-container'>
                <div className="circle circle-5">
                    <div className="circle circle-4">
                        <div className="circle circle-3">
                            <div className="circle circle-2">
                                <div className="circle circle-1">

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
