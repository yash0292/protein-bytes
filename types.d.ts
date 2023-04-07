import { Slug } from "sanity"

export interface Base {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}

interface Product extends Base {
    name: string;
    price: number;
    category: Category;
    image: Image;
    badge?: string | null;
    description: string;
}

interface Category extends Base {
    name: string;
    slug: Slug;
    categoryImage: Image;
}

interface Image {
    _type: "image";
    asset: Reference;
};

interface Reference {
    _ref: string
    _type: "reference"
}

interface Slug {
    _type: "slug";
    current: string
}


interface Store extends Base {
    address: string,
    license_number: string,
    logo: Image,
    phone: string,
    email: string,
    whatsAppLink: string
    facebook: string,
    instagram: string,
    store_name: string
}

interface Hero extends Base {
    subTitle: string,
    mainText: string,
    bannerImage: Image,
    paragraphText: string,
    buttonText: string
}