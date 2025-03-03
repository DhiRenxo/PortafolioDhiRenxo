export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    cover_image: string;
    tags: string[];
    published: boolean;
    created_at: Date;
}