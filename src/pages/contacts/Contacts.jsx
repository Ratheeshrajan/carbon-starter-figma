/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Accordion,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  OrderedList,
  ListItem,
} from '@carbon/react';
import { Add } from '@carbon/icons-react';
import { PageLayout } from '../../layouts/page-layout';

// The styles are imported into index.scss by default.
// Do the same unless you have a good reason not to.

const Contacts = () => {
  return (
    <PageLayout
      className="cs--contacts"
      fallback={<p>Loading contacts page...</p>}
    >
      <div className="cs--contacts__header">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <a href="/contacts">Contact</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="cs--contacts__title-row">
        <h1>Contacts</h1>
        <Button renderIcon={Add}>Export</Button>
      </div>

      <Accordion>
        <AccordionItem title="Users">
          <p>Users content goes here</p>
        </AccordionItem>
        <AccordionItem title="Executives">
          <p>Executives content goes here</p>
        </AccordionItem>
        <AccordionItem title="Managers">
          <p>Managers content goes here</p>
        </AccordionItem>
        <AccordionItem title="Vp's">
          <p>VP's content goes here</p>
        </AccordionItem>
      </Accordion>

      <div className="cs--contacts__content">
        <OrderedList>
          <ListItem>
            Global Configuration: Stored in the mcp_settings.json file,
            accessible via VS Code settings (see below). These settings apply
            across all your workspaces unless overridden by a project-level
            configuration.
          </ListItem>
          <ListItem>
            Project-level Configuration: Defined in a .Bob/mcp.json file within
            your project's Bob directory. This allows you to set up
            project-specific servers and share configurations with your team by
            committing the file to version control. Bob automatically detects
            and loads this file if it exists.
          </ListItem>
        </OrderedList>
      </div>
    </PageLayout>
  );
};

export default Contacts;

// Made with Bob
