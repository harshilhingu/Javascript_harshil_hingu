import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'biketype'
})
export class BiketypePipe implements PipeTransform {

  transform(BikesName: Content[], typeparameter ?: string):Content[]{
    if(typeparameter==null){
      return BikesName.filter(t=>t.type == null );
    }

    return BikesName.filter(t=>t.type == typeparameter );
  }

}
