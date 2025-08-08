// iconWrapper.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  className?: string;
}

const IconWrapper = ({ icon: Icon, className }: IconWrapperProps) => {
  if (!Icon) return null; // Prevent rendering undefined component
  return "";
};

export default IconWrapper;