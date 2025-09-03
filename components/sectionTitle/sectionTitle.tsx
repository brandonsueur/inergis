import clsx from "clsx";

export interface PageTitleProps {
  subTitle?: string | React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  subTitle,
  title,
  description,
  children,
  centered = false,
  className,
}: PageTitleProps) => {
  return (
    <div
      className={clsx(
        "items-start gap-4 mb-8",
        {
          "text-center": centered,
          "flex flex-col": !centered,
        },
        className
      )}
    >
      {subTitle && (
        <span className="text-md leading-4 bg-gradient-to-r text-secondary inline-block bg-clip-text font-medium">
          {subTitle}
        </span>
      )}

      {title && (
        <h1 className="text-3xl font-airbnb font-bold leading-14 text-primary">
          {title}
        </h1>
      )}

      {description && (
        <div className="prose prose-lg max-w-none mb-8 mt-4">
          <p className="mt-2 text-base text-md text-gray-500 leading-relaxed font-epilogue">
            {description}
          </p>
        </div>
      )}

      {children}
    </div>
  );
};
