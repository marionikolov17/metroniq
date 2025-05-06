import { View } from '@repo/types';
import ViewRepository from '../database/repository/view-repository';
import { handler } from '@repo/server-utils';

class ViewService {
  private repository: ViewRepository;

  constructor() {
    this.repository = new ViewRepository();
  }

  async CreateView(view: View) {
    const createViewHandler = handler(() => this.repository.createView(view));
    return createViewHandler();
  }

  async FetchViews(query: any) {
    const fetchViewsHandler = handler(() => this.repository.getViews(query));
    return fetchViewsHandler();
  }

  async UpdateView(id: string, view: View) {
    const updateViewHandler = handler(() =>
      this.repository.updateView(id, view),
    );
    return updateViewHandler();
  }
}

export default ViewService;
