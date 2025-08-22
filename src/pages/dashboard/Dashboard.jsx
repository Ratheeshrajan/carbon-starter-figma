/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Column,
  Grid,
  Tile,
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from '@carbon/react';

import { Footer } from '../../components/footer/Footer';
import { PageLayout } from '../../layouts/page-layout';

// The styles are imported into index.scss by default.
// Do the same unless you have a good reason not to.

const Dashboard = () => {
  // Sample data for the table
  const tableData = {
    headers: [
      { header: 'Header', key: 'header1' },
      { header: 'Header', key: 'header2' },
      { header: 'Header', key: 'header3' },
      { header: 'Header', key: 'header4' },
      { header: 'Header', key: 'header5' },
      { header: 'Header', key: 'header6' },
      { header: 'Header', key: 'header7' },
      { header: 'Header', key: 'header8' },
    ],
    rows: [
      {
        id: '1',
        header1: 'Content',
        header2: 'Content',
        header3: 'Content',
        header4: 'Content',
        header5: 'Content',
        header6: 'Content',
        header7: 'Content',
        header8: 'Content',
      },
      {
        id: '2',
        header1: 'Content',
        header2: 'Content',
        header3: 'Content',
        header4: 'Content',
        header5: 'Content',
        header6: 'Content',
        header7: 'Content',
        header8: 'Content',
      },
      {
        id: '3',
        header1: 'Content',
        header2: 'Content',
        header3: 'Content',
        header4: 'Content',
        header5: 'Content',
        header6: 'Content',
        header7: 'Content',
        header8: 'Content',
      },
    ],
  };
  return (
    <PageLayout
      className="cs--dashboard"
      fallback={<p>Loading dashboard page...</p>}
    >
      <div className="cs--dashboard__header">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <a href="/dashboard">Dashboard</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <Button>Validate</Button>
      </div>
      <Grid>
        <Column sm={4} md={4} lg={4} xlg={4}>
          <Tile className="cs--dashboard__tile">
            <h4>Title 01</h4>
            <p>Description</p>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={4} xlg={4}>
          <Tile className="cs--dashboard__tile">
            <h4>Title 02</h4>
            <p>Description</p>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={4} xlg={4}>
          <Tile className="cs--dashboard__tile">
            <h4>Title 03</h4>
            <p>Description</p>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={4} xlg={4}>
          <Tile className="cs--dashboard__tile">
            <h4>Title 04</h4>
            <p>Description</p>
          </Tile>
        </Column>

        <Column sm={4} md={8} lg={16} xlg={16}>
          <Tile className="cs--dashboard__tile cs--dashboard__tile--data">
            <h3 className="cs--dashboard__title">Usage analysis</h3>
            <p className="cs--dashboard__subtitle">Network usage data</p>
            <DataTable
              headers={tableData.headers}
              rows={tableData.rows}
              render={({ rows, headers, getHeaderProps, getTableProps }) => (
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      {headers.map((header) => (
                        <TableHeader
                          key={header.key}
                          {...getHeaderProps({ header })}
                        >
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        {row.cells.map((cell) => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            />
            <div className="cs--dashboard__pagination">
              <Pagination
                backwardText="Previous page"
                forwardText="Next page"
                itemsPerPageText="Items per page:"
                page={1}
                pageNumberText="Page Number"
                pageSize={100}
                pageSizes={[10, 20, 50, 100]}
                totalItems={100}
              />
            </div>
          </Tile>
        </Column>
        <Footer />
      </Grid>
    </PageLayout>
  );
};

export default Dashboard;

// Made with Bob
