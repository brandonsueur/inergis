import clsx from "clsx";

export interface PageTitleProps {
  subTitle?: string | React.ReactNode;
  title: string | React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  centered?: boolean;
  reverse?: boolean;
}

export const PageTitle = ({
  subTitle,
  title,
  description,
  children,
  centered = false,
  reverse = false,
}: PageTitleProps) => {
  return (
    <div
      className={clsx("items-start gap-4 mb-8", {
        "text-center": centered,
        "flex flex-col": !centered,
      })}
    >
      {subTitle && (
        <span
          className={clsx(
            "text-sm font-semibold text-secondary bg-clip-text ",
            {
              "text-white": reverse,
              "text-center": centered,
            }
          )}
        >
          {typeof subTitle === "string" ? <span>{subTitle}</span> : subTitle}
        </span>
      )}

      {title && (
        <h1
          className={clsx(
            "text-3xl md:text-5xl font-medium leading-10 md:leading-12 text-primary",
            {
              "text-white": reverse,
              "text-center": centered,
            }
          )}
        >
          {title}
        </h1>
      )}

      {description && (
        <div className="prose prose-lg max-w-none mb-8">
          <p
            className={clsx("mt-4 text-lg text-gray-600 mx-auto max-w-2xl", {
              "text-white": reverse,
              "text-center": centered,
            })}
          >
            {description}
          </p>
        </div>
      )}

      {children}
    </div>
  );
};
