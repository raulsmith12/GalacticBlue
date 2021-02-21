import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const CaliAlert = () => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            <Alert isOpen={visible} toggle={onDismiss}>
            <h4 className="alert-heading">Our Commitment to Your Privacy</h4>
            <p>
                GalacticBlue handles a lot of sensitive information for numerous clients and partners. This is why we take great pride in making sure this information remains private and confidential, as well as make sure that your privacy as a customer of ours remains intact. Please refer to our privacy policy for further details.
            </p>
            </Alert>
        </div>
    )
}

export default CaliAlert;
