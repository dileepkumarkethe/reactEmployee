import React from 'react';



const Footer = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4">Features</h2>

            <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                
                <a className="nav-link" href="#others" data-toggle="tab">Others</a>
            </nav>

            <div className="tab-content py-5">
                

                <div className="tab-pane" id="others">
                    <h3>Others</h3>
                    <ul>
                        <li>Redux</li>
                        <li>Redux Form</li>
                        <li>Lodash</li>
                        <li>React Bootstrap Table</li>
                        <li>Font Awesome (for icons)</li>
                        <li>Hot Module Replacement (HMR)</li>                        
                    </ul>
                </div>                
            </div>
        </footer>
    );
};



export default Footer;
