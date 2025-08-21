/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
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
} from '@carbon/react';

/**
 * ActivitiesTable component displays network usage data in a table format
 * with pagination controls.
 */
export const ActivitiesTable = () => {
  // Sample headers based on the design
  const headers = [
    { key: 'col1', header: 'Header' },
    { key: 'col2', header: 'Header' },
    { key: 'col3', header: 'Header' },
    { key: 'col4', header: 'Header' },
    { key: 'col5', header: 'Header' },
    { key: 'col6', header: 'Header' },
    { key: 'col7', header: 'Header' },
    { key: 'col8', header: 'Header' },
  ];

  // Sample rows data - in a real application, this would come from an API
  const rows = Array(3)
    .fill(0)
    .map((_, i) => ({
      id: `row-${i}`,
      col1: 'Content',
      col2: 'Content',
      col3: 'Content',
      col4: 'Content',
      col5: 'Content',
      col6: 'Content',
      col7: 'Content',
      col8: 'Content',
    }));

  return (
    <div className="cs--activities-table">
      <Breadcrumb className="cs--activities-table__breadcrumb">
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Activity</BreadcrumbItem>
      </Breadcrumb>
      <div className="cs--activities-table__header">
        <h2>Activities</h2>
        <div className="cs--activities-table__usage">
          <h3>Usage analysis</h3>
          <p>Network usage data</p>
        </div>
      </div>

      <DataTable rows={rows} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <div className="cs--activities-table__container">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination
              backwardText="Previous page"
              forwardText="Next page"
              itemsPerPageText="Items per page:"
              pageNumberText="Page Number"
              pageSize={100}
              pageSizes={[10, 20, 50, 100]}
              totalItems={100}
              page={1}
              onChange={() => {}}
            />
          </div>
        )}
      </DataTable>
    </div>
  );
};

export default ActivitiesTable;

// Made with Bob
