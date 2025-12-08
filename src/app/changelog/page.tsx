import { changelogUpdates } from "@content/changelog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ChangelogTOC } from "@/components/changelog/ChangelogTOC";

export default function ChangelogPage() {
  const tocItems = changelogUpdates.map((update) => ({
    label: update.label,
    id: update.label.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-6 mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-secondary">
            Product Updates
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink-primary">
            Skyhook Changelog
          </h1>
          <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
            Monthly highlights of everything shipping inside Skyhook: major
            features, polish, bug fixes, and infrastructure upgrades across the
            platform.
          </p>
        </header>

        <div className="flex gap-8 lg:gap-12">
          {/* Left TOC */}
          <ChangelogTOC items={tocItems} />

          {/* Main content */}
          <div className="flex-1 max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {changelogUpdates.map((update) => (
                  <section
                    key={update.label}
                    id={update.label.toLowerCase().replace(/\s+/g, "-")}
                    className="relative scroll-mt-8"
                  >
                    {/* Timeline dot and date */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                      <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-ink-primary font-semibold">
                        {update.label}
                      </h2>
                    </div>

                    {/* Content cards */}
                    <div className="ml-8 space-y-6">
                      {update.sections.map((section) => (
                        <article
                          key={section.title}
                          className="bg-surface border border-border rounded-lg p-6 space-y-4 hover-lift"
                        >
                          <h3 className="text-base font-semibold text-ink-primary">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-sm text-ink-secondary leading-relaxed"
                              >
                                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                                <span className="[&_strong]:text-ink-primary [&_strong]:font-medium [&_a]:text-accent [&_a]:underline">
                                  <MDXRemote
                                    source={item}
                                    components={{
                                      p: ({ children }) => <>{children}</>,
                                      a: ({ href, children }) => (
                                        <a href={href} target="_blank" rel="noopener noreferrer">
                                          {children}
                                        </a>
                                      ),
                                    }}
                                  />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
