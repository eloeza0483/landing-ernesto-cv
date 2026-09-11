import { useLanguage } from '../i18n/useLanguage'
import type { Project } from '../i18n/translations'
import { Icon } from './Icon'

function ProjectRow({ project }: { project: Project }) {
  const Wrapper = project.repoUrl ? 'a' : 'div'
  const wrapperProps = project.repoUrl
    ? { href: project.repoUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="project-row grid grid-cols-1 gap-3 py-6 sm:grid-cols-[200px_minmax(0,1fr)_200px] sm:gap-12"
      style={{ color: 'inherit', cursor: project.repoUrl ? 'pointer' : 'default' }}
    >
      <div className="flex flex-row justify-between gap-2 sm:flex-col sm:gap-2">
        <span className="lbl" style={project.accentMeta ? { color: 'var(--color-accent)' } : undefined}>
          {project.metaTop}
        </span>
        <span className="lbl">{project.metaBottom}</span>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="project-title m-0 text-2xl font-semibold tracking-[-0.02em] sm:text-[26px]">
          {project.title}
        </h3>
        <p className="m-0 max-w-[66ch] text-base leading-[1.6]" style={{ color: 'var(--color-muted)' }}>
          {project.description}
        </p>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-start gap-3.5" style={{ color: 'var(--color-dim)' }}>
          {project.icons.map((icon) => (
            <Icon key={icon} name={icon} size={20} />
          ))}
        </div>
        {project.repoUrl && (
          <span className="project-go lbl hidden sm:inline" style={{ color: 'var(--color-accent)' }}>
            →
          </span>
        )}
      </div>
    </Wrapper>
  )
}

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="border-b border-(--color-line) px-5 py-9 sm:px-11 lg:py-17">
      <h2 className="m-0 mb-9 font-mono text-[15px] font-medium tracking-[0.05em] uppercase">{t.projectsTitle}</h2>
      <div className="flex flex-col">
        {t.projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
        <div className="border-t border-(--color-line)" />
      </div>
    </section>
  )
}
