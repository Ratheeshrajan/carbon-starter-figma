/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Column, Grid, Tile } from '@carbon/react';

import { Footer } from '../../components/footer/Footer';
import { PageLayout } from '../../layouts/page-layout';
import { ActivitiesTable } from '../../components/activitiesTable/ActivitiesTable';

// The styles are imported into index.scss by default.
// Do the same unless you have a good reason not to.

const Dashboard = () => {
  return (
    <PageLayout
      className="cs--dashboard"
      fallback={<p>Loading dashboard page...</p>}
    >
      <Grid>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Tile className="cs--dashboard__tile cs--dashboard__tile--data">
            <ActivitiesTable />
          </Tile>
        </Column>
        <Footer />
      </Grid>
    </PageLayout>
  );
};

export default Dashboard;

// Made with Bob
