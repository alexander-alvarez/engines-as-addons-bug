
// this could be whatever, could be a service or a component, but the point is that the my-engine addon is used
// as a plain old addon so that we can access some part of it (maybe a service that we want to extend)
// as currently implemented in master, anything within the engine that we want to import as if it were
// an addon, we'd have to export into a third addon and import into both (my-engine and shared-addon)
export { default } from 'my-engine';
