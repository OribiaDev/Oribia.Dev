import { Link } from 'react-router-dom';

const four04 = () => {

    return ( 
        <div className="four04Content">
            <title>404 • Oribia.Dev</title>
            <meta property="og:title" content="404 • Oribia.Dev" />
            <meta name="description" content="404 Page Not Found" />
            <meta property="og:description" content="404 Page Not Found" />
            <div className="four04textContainer">
                <div className="four04Title">404</div>
                <div className="four04SubTitle">Are you sure you're in the right place?</div>
                <div className="four04ButtonContainer">
                    <Link to='/' className='four04Button' id='GenericLinkDeco'>
                        <div className='four04BContent'>
                            <div className='four04BText'>
                                Back to Homepage
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default four04;