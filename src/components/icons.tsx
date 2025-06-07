import Image from "next/image";

interface MogooLogoProps {
  size?: number;
  width?: number;
  height?: number;
  [key: string]: any; // Allow additional props
}

export const MogooLogo: React.FC<MogooLogoProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => (
  <Image
    src="/mogoo.png"
    alt="Mogoo Logo"
    width={size} 
    height={size} 
    {...props}
  />
);
