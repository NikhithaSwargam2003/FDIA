import React from 'react'
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

const Footer = () => {
    return (
        <SoftBox>
            <SoftBox mt={4} mb={1}>
                <SoftButton variant="gradient" color="warning" target="_blank" fullWidth href="https://arxiv.org/pdf/1910.01716.pdf#:~:text=In%20false%20data%20injection%20attack,to%20the%20sensor%20output%20undetected.">
                    Refer this official Citation
                </SoftButton>
            </SoftBox>
        </SoftBox>
    )
}

export default Footer;