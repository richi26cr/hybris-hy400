/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN!
 * --- Generated at May 8, 2018 2:42:47 PM
 * ----------------------------------------------------------------
 *
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package de.hybris.platform.cmssmarteditwebservices.dto;

import java.io.Serializable;
import de.hybris.platform.cmssmarteditwebservices.dto.CatalogVersionWsDTO;
import java.util.List;
import java.util.Map;

/**
 * Catalog DTO
 */
public  class CatalogWsDTO  implements Serializable 
{

 	/** Default serialVersionUID value. */
 
 	private static final long serialVersionUID = 1L;

	/** <i>Generated property</i> for <code>CatalogWsDTO.catalogId</code> property defined at extension <code>cmssmarteditwebservices</code>. */
		
	private String catalogId;

	/** <i>Generated property</i> for <code>CatalogWsDTO.name</code> property defined at extension <code>cmssmarteditwebservices</code>. */
		
	private Map<String, String> name;

	/** <i>Generated property</i> for <code>CatalogWsDTO.versions</code> property defined at extension <code>cmssmarteditwebservices</code>. */
		
	private List<CatalogVersionWsDTO> versions;
	
	public CatalogWsDTO()
	{
		// default constructor
	}
	
		
	
	public void setCatalogId(final String catalogId)
	{
		this.catalogId = catalogId;
	}

		
	
	public String getCatalogId() 
	{
		return catalogId;
	}
	
		
	
	public void setName(final Map<String, String> name)
	{
		this.name = name;
	}

		
	
	public Map<String, String> getName() 
	{
		return name;
	}
	
		
	
	public void setVersions(final List<CatalogVersionWsDTO> versions)
	{
		this.versions = versions;
	}

		
	
	public List<CatalogVersionWsDTO> getVersions() 
	{
		return versions;
	}
	


}
