import React from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';

const SubStructure = ({ children }) => (
    <div>
        <Header />
        { children }
        <Footer />
    </div>
);

export default SubStructure;
