export interface ICommentResponse{
    userId: number;
    companyId: number;
    title: string;
    content: string;
    companyLogo: string;
    firstName?: string;  // Optional olarak tanımla
    lastName?: string;
    position?: string;
    avatar?: string;

}