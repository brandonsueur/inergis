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
        <span className="text-md leading-8 bg-gradient-to-r from-[#FFA100] to-[#FFFB00] inline-block text-transparent bg-clip-text font-medium">
          {subTitle}
        </span>
      )}

      {title && (
        <h1 className="text-3xl font-ca-slalom font-bold leading-14 dark:text-white text-gray-900">
          {title}
        </h1>
      )}

      {description && (
        <div className="prose prose-lg max-w-none mb-8 mt-4">
          <p className="mt-2 text-base text-md text-gray-400 leading-relaxed font-epilogue">
            {description}
          </p>
        </div>
      )}

      {children}
    </div>
  );
};
