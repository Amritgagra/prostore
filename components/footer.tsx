import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
        <div className="wrapper py-4 text-center text-sm text-muted-foreground">
            {currentYear} {APP_NAME}. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer