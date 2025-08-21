"use client";

import useWindowWidth from "../_utilities/useWindowWidth";

export default function Projects() {
  const windowWidth = useWindowWidth();

  const renderProjectContent = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-6">
            <div id="84th-st-mural" className="scroll-mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-brand-600)] mb-4">
                84th St Mural
              </h2>
              <h1 className="text-3xl lg:text-4xl font-black text-[var(--color-content-primary)]">
                &ldquo;Welcome to Jackson Heights: a Celebration of Diversity, Solidarity and Community&rdquo;
              </h1>
              <p className="text-lg text-[var(--color-content-secondary)]">
                by Eli Salome-Diaz and Benny Guerra
              </p>
            </div>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-[var(--color-content-primary)]">
            <p>
              84th Street at Roosevelt Avenue is an area in front of the CitiBike station with a long blank wall. 
              It is a place where people often dump garbage, urinate publicly and solicit prostitution. This 
              neglected space has a constant graffiti problem so it is the perfect spot for some uplifting, public art!
            </p>

            <p>
              Jackson Heights is a melting pot where 137+ languages and cultures are represented. We coexist 
              peacefully together. We are a strong community because of this tolerance and we are a role model 
              for the world in this regard. We want to celebrate this!
            </p>

            <p>
              The mural will reflect the heart of Jackson Heights– where diverse cultures, backgrounds and 
              experiences intersect and support each other. It will be a joyful piece that invites both 
              residents and visitors to stop and admire it, photograph it, and feel hopeful.
            </p>

            <p>
              This mural is planned with extensive input from members of the community who completed a survey.
            </p>
          </div>
        </div>
      );
  };

  if (windowWidth > 768) {
    return (
      <div className="flex w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 pt-[var(--spacing-xl)] pb-[var(--spacing-7xl)] flex-col min-h-screen">
        {/* Project Content */}
        <div className="flex-1">
          {renderProjectContent()}
        </div>
      </div>
    );
  }

  // Mobile layout
  return (
    <div className="flex w-full px-4 pt-[var(--spacing-4xl)] pb-[var(--spacing-4xl)] flex-col min-h-screen">
      {/* Project Content */}
      <div className="flex-1">
        {renderProjectContent()}
      </div>
    </div>
  );
} 