import "./project-component.scss";

type Project = {
  title: string;
  picture: string;
  tags: string[];
  description?: string;
  finished: boolean;
};

export function ProjectComponent({
  title,
  picture,
  tags,
  description,
  finished,
}: Project) {
  return (
    <section className="project-component">
      <div className="project__container">
        <div className="project__left-side">
          <div className="project-mobile-title">{title}</div>
          <div
            className="project-picture"
            style={{ backgroundImage: `url(${picture})` }}
          ></div>
        </div>
        <div className="project__right-side">
          <div className="project-desktop-title">{title}</div>
          <div className="project-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laudantium numquam incidunt quo atque magni delectus
            officiis, exercitationem eveniet? Consequuntur quam beatae suscipit
            illum,Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laudantium numquam incidunt quo atque magni delectus
            officiis, exercitationem eveniet? Consequuntur quam beatae suscipit
            illum,Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laudantium numquam incidunt quo atque magni delectus
            officiis, exercitationem eveniet? Consequuntur quam beatae suscipit
            illum,Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laudantium numquam incidunt quo atque magni delectus
            officiis, exercitationem eveniet? Consequuntur quam beatae suscipit
            illum,Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laudantium numquam incidunt quo atque magni delectus
            officiis, exercitationem eveniet? Consequuntur quam beatae suscipit
            illum,Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laudantium numquam incidunt quo atque magni delectus
            officiis, exercitationem eveniet? Consequuntur quam beatae suscipit
            illum,
          </div>
        </div>
      </div>
      <div className="project-tags">
        {tags.map((tag, index) => {
          return (
            <span key={index}>
              {tag}
              {index !== tags.length - 1 && ",\u00A0"}
            </span>
          );
        })}
      </div>
    </section>
  );
}
