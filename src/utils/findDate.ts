import { Product } from "@/types";

export const filterDays = (data: Product[]) => {
    const today = new Date();
    const lastAgo = new Date(today);
    lastAgo.setDate(today.getDate() - 2);

    return data.filter(item => {
        const itemDate = new Date(item.createdAt);
        return itemDate >= lastAgo;
    });
};
