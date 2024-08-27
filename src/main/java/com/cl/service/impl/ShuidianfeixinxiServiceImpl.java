package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.ShuidianfeixinxiDao;
import com.cl.entity.ShuidianfeixinxiEntity;
import com.cl.service.ShuidianfeixinxiService;
import com.cl.entity.view.ShuidianfeixinxiView;

@Service("shuidianfeixinxiService")
public class ShuidianfeixinxiServiceImpl extends ServiceImpl<ShuidianfeixinxiDao, ShuidianfeixinxiEntity> implements ShuidianfeixinxiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShuidianfeixinxiEntity> page = this.selectPage(
                new Query<ShuidianfeixinxiEntity>(params).getPage(),
                new EntityWrapper<ShuidianfeixinxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShuidianfeixinxiEntity> wrapper) {
		  Page<ShuidianfeixinxiView> page =new Query<ShuidianfeixinxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<ShuidianfeixinxiView> selectListView(Wrapper<ShuidianfeixinxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShuidianfeixinxiView selectView(Wrapper<ShuidianfeixinxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
