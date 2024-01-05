interface SocialLink {
    color: string;
    name: string;
    path: string;
}

export interface FooterProps {
    desc: string;
    socials: SocialLink[];
}