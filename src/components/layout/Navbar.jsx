import React from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-8">
      <div className="text-2xl font-bold">QuickDaak</div>
      <div className="flex gap-4">
        <Button variant="ghost">Login</Button>
        <Button>Signup</Button>
      </div>
    </nav>
  );
};

export default Navbar;