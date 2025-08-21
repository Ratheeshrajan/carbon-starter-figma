/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Breadcrumb,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
} from '@carbon/react';

import { PageLayout } from '../../layouts/page-layout';

/**
 * Contacts page component displays contact information organized by categories
 * using an accordion component.
 */
const Contacts = () => {
  return (
    <PageLayout
      className="cs--contacts"
      fallback={<p>Loading contacts page...</p>}
    >
      <Breadcrumb className="cs--contacts__breadcrumb">
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Contact</BreadcrumbItem>
      </Breadcrumb>

      <div className="cs--contacts__header">
        <h1>Contacts</h1>
      </div>

      <div className="cs--contacts__content">
        <Accordion size="lg">
          <AccordionItem title="Users">
            <p>
              The accordion component delivers large amounts of content in a
              small space through progressive disclosure. The user gets key
              details about the underlying content and can choose to expand that
              content within the constraints of the accordion.
            </p>
          </AccordionItem>
          <AccordionItem title="Executives">
            <p>
              The accordion component delivers large amounts of content in a
              small space through progressive disclosure. The user gets key
              details about the underlying content and can choose to expand that
              content within the constraints of the accordion.
            </p>
          </AccordionItem>
          <AccordionItem title="Managers">
            <p>
              The accordion component delivers large amounts of content in a
              small space through progressive disclosure. The user gets key
              details about the underlying content and can choose to expand that
              content within the constraints of the accordion.
            </p>
          </AccordionItem>
          <AccordionItem title="Vp's">
            <p>
              The accordion component delivers large amounts of content in a
              small space through progressive disclosure. The user gets key
              details about the underlying content and can choose to expand that
              content within the constraints of the accordion.
            </p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="cs--contacts__info">
        <ol>
          <li>
            Global Configuration: Stored in the mcp_settings.json file,
            accessible via VS Code settings (see below). These settings apply
            across all your workspaces unless overridden by a project-level
            configuration.
          </li>
          <li>
            Project-level Configuration: Defined in a .Bob/mcp.json file within
            your project's Bobt directory. This allows you to set up
            project-specific servers and share configurations with your team by
            committing the file to version control. Bob automatically detects
            and loads this file if it exists.
          </li>
        </ol>
      </div>
    </PageLayout>
  );
};

export default Contacts;

// Made with Bob
