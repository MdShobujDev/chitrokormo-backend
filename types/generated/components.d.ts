import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCartProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_cart_products';
  info: {
    description: '';
    displayName: 'cart_products';
  };
  attributes: {
    price: Schema.Attribute.Integer;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    product_quantity: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    size: Schema.Attribute.String;
    slug: Schema.Attribute.UID &
      Schema.Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
  };
}

export interface SharedDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_descriptions';
  info: {
    description: '';
    displayName: 'description';
  };
  attributes: {
    list_items: Schema.Attribute.Component<'shared.list-item', true>;
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    description: '';
    displayName: 'list-item';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.list', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVariant extends Struct.ComponentSchema {
  collectionName: 'components_shared_variants';
  info: {
    displayName: 'variant';
  };
  attributes: {
    available_quantity: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    price: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    size: Schema.Attribute.String & Schema.Attribute.Required;
    stock_status: Schema.Attribute.Enumeration<
      ['in_stock', 'out_of_stock', 'upcomming']
    > &
      Schema.Attribute.DefaultTo<'in_stock'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cart-products': SharedCartProducts;
      'shared.description': SharedDescription;
      'shared.list': SharedList;
      'shared.list-item': SharedListItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.variant': SharedVariant;
    }
  }
}
