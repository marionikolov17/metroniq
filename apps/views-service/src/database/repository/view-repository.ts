import { View } from '@repo/types';
import viewModel from '../models/View';

class ViewRepository {
  private viewModel: typeof viewModel;

  constructor() {
    this.viewModel = viewModel;
  }

  async createView(view: View) {
    const newView = await this.viewModel.create(view);
    return newView;
  }

  async getViews(query: any) {
    const views = await this.viewModel.find(query);
    return views;
  }

  async updateView(id: string, view: View) {
    const updatedView = await this.viewModel.findByIdAndUpdate(id, view, {
      new: true,
    });
    return updatedView;
  }
}

export default ViewRepository;
