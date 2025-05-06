import { View } from '@repo/types';
import ViewRepository from '../database/repository/view-repository';
import { handler } from '../utils/service-handler';

class ViewService {
  private repository: ViewRepository;

  constructor() {
    this.repository = new ViewRepository();
  }

  async CreateView(view: View) {
    return handler(async () => this.repository.createView(view));
  }

  async FetchViews(query: any) {
    return handler(async () => this.repository.getViews(query));
  }

  async UpdateView(id: string, view: View) {
    return handler(async () => this.repository.updateView(id, view));
  }
}

export default ViewService;
