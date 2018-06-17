import React from 'react';
import requireAuth from '../components/requireAuth';

const Feature = () => <h3>Feature</h3>;

export default requireAuth(Feature);
