type LayoutType = {
    children: JSX.Element;
};
type Route = {
    element: React.FC;
    path: string;
    layout?: React.FC<LayoutType>;
};

export type { Route };
